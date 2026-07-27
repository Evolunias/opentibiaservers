import { createClient } from '@supabase/supabase-js';

function firstNonEmpty(values = []) {
  return values.find((value) => typeof value === 'string' && value.trim())?.trim() || '';
}

function isValidUrl(value) {
  if (!value) return false;

  try {
    const url = new URL(value);
    return Boolean(url.protocol && url.hostname);
  } catch {
    return false;
  }
}

export async function GET() {
  const supabaseUrl = firstNonEmpty([
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_SUPABASE_DB_URL,
    process.env.PROJECT_URL,
    process.env.SUPABASE_URL,
  ]);
  const supabaseKey = firstNonEmpty([
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    process.env.NEXT_SUPABASE_KEY,
    process.env.PUBLISHABLE_KEY,
    process.env.SUPABASE_ANON_KEY,
  ]);

  const result = {
    ok: false,
    checked_at: new Date().toISOString(),
    env: {
      has_url: Boolean(supabaseUrl),
      has_publishable_key: Boolean(supabaseKey),
      url: supabaseUrl || null,
      url_valid: isValidUrl(supabaseUrl),
    },
    database: {
      reachable: false,
      servers_table: false,
      sync_logs_table: false,
      required_sync_columns: false,
    },
  };

  if (!supabaseUrl || !supabaseKey || !isValidUrl(supabaseUrl)) {
    return Response.json(result, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    const { error: serversError } = await supabase.from('servers').select('id', { count: 'exact', head: true });
    result.database.reachable = true;
    result.database.servers_table = !serversError;

    const { error: syncLogsError } = await supabase.from('sync_logs').select('id', { count: 'exact', head: true });
    result.database.sync_logs_table = !syncLogsError;

    const requiredSyncColumns = [
      'id',
      'source',
      'source_id',
      'source_url',
      'source_rank',
      'host',
      'max_players',
      'points',
      'unique_players',
      'multi_client_level',
      'monsters_count',
      'npcs_count',
      'server_engine',
      'source_owner_name',
      'source_added_text',
      'source_updated_text',
      'source_last_update_text',
      'external_launch_url',
      'last_seen_at',
      'source_payload',
      'slug',
      'canonical_path',
      'seo_title',
      'seo_description',
      'keyword_primary',
      'keyword_aliases',
      'official_summary',
      'official_facts',
      'research_sources',
      'hero_image_url',
      'official_last_researched_at',
      'content_status',
    ];
    const { error: columnError } = await supabase
      .from('servers')
      .select(requiredSyncColumns.join(','), { head: true })
      .limit(1);
    result.database.required_sync_columns = !columnError;

    result.ok = result.database.servers_table;
    if (serversError) result.database.servers_error = serversError.message;
    if (syncLogsError) result.database.sync_logs_error = syncLogsError.message;
    if (columnError) result.database.required_sync_columns_error = columnError.message;

    return Response.json(result, { status: result.ok ? 200 : 500 });
  } catch (error) {
    result.database.error = error instanceof Error ? error.message : String(error);
    return Response.json(result, { status: 500 });
  }
}

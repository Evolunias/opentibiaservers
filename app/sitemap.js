import { createClient } from '@supabase/supabase-js';
import { buildAbsoluteUrl } from '@/lib/seo';

function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export default async function sitemap() {
  const staticUrls = [
    {
      url: buildAbsoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    {
      url: buildAbsoluteUrl('/community'),
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];

  const supabase = getSupabaseServerClient();
  if (!supabase) return staticUrls;

  const { data } = await supabase
    .from('servers')
    .select('id,updated_at,last_seen_at')
    .order('updated_at', { ascending: false })
    .limit(5000);

  const serverUrls = (data || []).map((server) => ({
    url: buildAbsoluteUrl(`/server/${server.id}`),
    lastModified: server.updated_at || server.last_seen_at || new Date().toISOString(),
    changeFrequency: 'hourly',
    priority: 0.9,
  }));

  return [...staticUrls, ...serverUrls];
}

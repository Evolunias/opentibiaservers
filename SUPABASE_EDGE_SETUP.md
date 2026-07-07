# Supabase Edge Function Notes

The current maintained sync path is the Next.js route:

```text
POST /api/sync-servers
```

Use this path first because it shares the same code as the app and writes to Supabase with `SUPABASE_SERVICE_ROLE_KEY`.

The repo still contains `supabase/functions/sync-servers/index.ts` for teams that want to run the importer as a Supabase Edge Function. If you deploy it, keep its parser and schema mapping aligned with:

- `lib/otservlist.js`
- `SOURCE_SCHEMA_MAPPING.md`
- `supabase/migrations/002_add_external_source_fields.sql`

Required Edge Function variables:

```env
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
SYNC_TOKEN=
```

Recommended production behavior:

- Protect the function with `SYNC_TOKEN`
- Write every run to `sync_logs`
- Detect Cloudflare challenge HTML and fail clearly
- Store parsed source data in `servers.source_payload`

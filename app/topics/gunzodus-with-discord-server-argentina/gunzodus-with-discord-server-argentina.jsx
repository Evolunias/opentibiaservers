import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-discord-server-argentina');
}

export default function GunzodusWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-discord-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-discord-server-uk');
}

export default function GunzodusWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-discord-server-uk" />;
}

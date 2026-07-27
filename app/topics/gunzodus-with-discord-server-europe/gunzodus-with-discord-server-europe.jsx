import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-discord-server-europe');
}

export default function GunzodusWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-discord-server-europe" />;
}

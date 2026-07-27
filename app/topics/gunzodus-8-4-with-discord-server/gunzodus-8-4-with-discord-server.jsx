import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-with-discord-server');
}

export default function Gunzodus84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-with-discord-server" />;
}

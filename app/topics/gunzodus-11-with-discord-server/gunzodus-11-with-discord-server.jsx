import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-with-discord-server');
}

export default function Gunzodus11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-with-discord-server" />;
}

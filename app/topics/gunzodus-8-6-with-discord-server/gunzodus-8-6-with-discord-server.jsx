import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-with-discord-server');
}

export default function Gunzodus86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-with-discord-server" />;
}

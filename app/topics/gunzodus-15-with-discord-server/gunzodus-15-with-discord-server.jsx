import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-with-discord-server');
}

export default function Gunzodus15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-with-discord-server" />;
}

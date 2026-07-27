import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-with-discord-server');
}

export default function Gunzodus74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-with-discord-server" />;
}

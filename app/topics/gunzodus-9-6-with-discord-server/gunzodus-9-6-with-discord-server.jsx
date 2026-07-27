import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-9-6-with-discord-server');
}

export default function Gunzodus96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-9-6-with-discord-server" />;
}

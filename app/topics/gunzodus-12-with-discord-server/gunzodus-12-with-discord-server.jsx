import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-with-discord-server');
}

export default function Gunzodus12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-with-discord-server" />;
}

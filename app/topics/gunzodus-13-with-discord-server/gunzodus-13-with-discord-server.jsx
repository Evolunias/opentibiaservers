import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-with-discord-server');
}

export default function Gunzodus13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-with-discord-server" />;
}

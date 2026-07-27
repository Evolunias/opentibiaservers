import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-with-discord-server');
}

export default function Gunzodus80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-with-discord-server" />;
}

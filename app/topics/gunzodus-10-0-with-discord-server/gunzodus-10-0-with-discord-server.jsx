import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-with-discord-server');
}

export default function Gunzodus100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-with-discord-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-6-with-discord-server');
}

export default function Gunzodus76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-6-with-discord-server" />;
}

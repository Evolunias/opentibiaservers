import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-with-discord-server');
}

export default function Gunzodus14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-with-discord-server" />;
}

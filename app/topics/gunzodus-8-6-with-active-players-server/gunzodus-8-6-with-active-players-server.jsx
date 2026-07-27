import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-with-active-players-server');
}

export default function Gunzodus86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-with-active-players-server" />;
}

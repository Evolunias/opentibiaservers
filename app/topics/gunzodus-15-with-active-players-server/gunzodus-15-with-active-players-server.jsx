import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-with-active-players-server');
}

export default function Gunzodus15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-with-active-players-server" />;
}

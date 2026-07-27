import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-with-active-players-server');
}

export default function Gunzodus11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-with-active-players-server" />;
}

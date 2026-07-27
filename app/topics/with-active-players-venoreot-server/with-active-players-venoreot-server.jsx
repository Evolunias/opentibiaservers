import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-venoreot-server');
}

export default function WithActivePlayersVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-venoreot-server" />;
}

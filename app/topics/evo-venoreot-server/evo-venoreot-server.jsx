import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-venoreot-server');
}

export default function EvoVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="evo-venoreot-server" />;
}

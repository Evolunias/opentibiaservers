import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-venoreot-servers');
}

export default function EvoVenoreotServersKeywordPage() {
  return <StaticKeywordPage slug="evo-venoreot-servers" />;
}

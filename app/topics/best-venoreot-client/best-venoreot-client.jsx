import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-client');
}

export default function BestVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-client" />;
}

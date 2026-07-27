import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-server');
}

export default function BestVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-ots');
}

export default function BestVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-ots" />;
}

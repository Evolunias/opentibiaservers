import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-ot');
}

export default function BestVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-ot" />;
}

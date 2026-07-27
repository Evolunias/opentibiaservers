import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-ot');
}

export default function TopVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-ot" />;
}

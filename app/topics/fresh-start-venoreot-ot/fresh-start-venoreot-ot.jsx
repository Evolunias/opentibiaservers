import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-ot');
}

export default function FreshStartVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-ot" />;
}

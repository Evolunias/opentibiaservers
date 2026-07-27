import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-ots');
}

export default function FreshStartVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-ots" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-ots');
}

export default function TopVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-ots" />;
}

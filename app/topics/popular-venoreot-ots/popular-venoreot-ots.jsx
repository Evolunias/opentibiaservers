import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-ots');
}

export default function PopularVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-ots" />;
}

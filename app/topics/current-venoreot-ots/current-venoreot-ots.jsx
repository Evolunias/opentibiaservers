import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-ots');
}

export default function CurrentVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-ots" />;
}

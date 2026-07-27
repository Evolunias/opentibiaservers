import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-ots');
}

export default function LowrateVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-ots" />;
}

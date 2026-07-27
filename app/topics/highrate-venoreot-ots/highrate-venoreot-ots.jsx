import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-ots');
}

export default function HighrateVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-ots" />;
}

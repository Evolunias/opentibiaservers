import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-ot');
}

export default function HighrateVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-ot" />;
}

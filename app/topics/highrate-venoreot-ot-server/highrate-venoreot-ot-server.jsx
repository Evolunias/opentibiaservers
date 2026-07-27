import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-ot-server');
}

export default function HighrateVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-ot-server" />;
}

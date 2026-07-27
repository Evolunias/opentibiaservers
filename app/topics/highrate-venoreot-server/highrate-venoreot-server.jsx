import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-server');
}

export default function HighrateVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-client');
}

export default function HighrateVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-client" />;
}

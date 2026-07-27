import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-client');
}

export default function LowrateVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-client" />;
}

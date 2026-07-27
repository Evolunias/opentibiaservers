import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-server');
}

export default function LowrateVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-server" />;
}

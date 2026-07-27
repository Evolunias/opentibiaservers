import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-ot-server');
}

export default function LowrateVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-private-server');
}

export default function LowrateVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-private-server" />;
}

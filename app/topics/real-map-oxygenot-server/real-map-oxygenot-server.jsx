import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-server');
}

export default function RealMapOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-server" />;
}

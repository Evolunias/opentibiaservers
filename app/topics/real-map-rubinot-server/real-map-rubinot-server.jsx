import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-server');
}

export default function RealMapRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-server" />;
}

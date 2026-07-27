import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-ot-server');
}

export default function RealMapRubinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-ot-server" />;
}

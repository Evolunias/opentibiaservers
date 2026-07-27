import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-private-server');
}

export default function RealMapInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-private-server" />;
}

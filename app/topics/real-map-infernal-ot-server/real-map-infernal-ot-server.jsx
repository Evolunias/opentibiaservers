import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-server');
}

export default function RealMapInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-server" />;
}

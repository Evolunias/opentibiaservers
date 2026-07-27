import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-real-map-ot-server');
}

export default function Tibia1098RealMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-real-map-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-real-map-ot-server');
}

export default function Tibia86RealMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-real-map-ot-server" />;
}

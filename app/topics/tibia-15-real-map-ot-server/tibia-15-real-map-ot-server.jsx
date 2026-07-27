import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-real-map-ot-server');
}

export default function Tibia15RealMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-real-map-ot-server" />;
}

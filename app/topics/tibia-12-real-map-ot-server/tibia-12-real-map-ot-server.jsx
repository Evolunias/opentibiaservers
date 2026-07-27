import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-real-map-ot-server');
}

export default function Tibia12RealMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-real-map-ot-server" />;
}

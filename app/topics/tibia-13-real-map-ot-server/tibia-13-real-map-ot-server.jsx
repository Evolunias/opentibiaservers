import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-ot-server');
}

export default function Tibia13RealMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-real-map-ot-server');
}

export default function Tibia76RealMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-real-map-ot-server" />;
}

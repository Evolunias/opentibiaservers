import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-ot-server');
}

export default function Tibia96RealMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-ot-server" />;
}

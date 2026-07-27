import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-real-map-ot-server');
}

export default function Tibia772RealMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-real-map-ot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-real-map-ot-server');
}

export default function Tibia71RealMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-real-map-ot-server" />;
}

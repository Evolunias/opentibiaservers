import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-real-map-ot-server');
}

export default function Tibia854RealMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-real-map-ot-server" />;
}

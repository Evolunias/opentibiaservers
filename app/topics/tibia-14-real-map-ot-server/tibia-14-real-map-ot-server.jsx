import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-real-map-ot-server');
}

export default function Tibia14RealMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-real-map-ot-server" />;
}

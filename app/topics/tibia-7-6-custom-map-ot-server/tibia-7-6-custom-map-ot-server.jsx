import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-custom-map-ot-server');
}

export default function Tibia76CustomMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-custom-map-ot-server" />;
}

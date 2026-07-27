import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-custom-map-ot-server');
}

export default function Tibia15CustomMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-custom-map-ot-server" />;
}

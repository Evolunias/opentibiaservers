import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-custom-map-ot-server');
}

export default function Tibia81CustomMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-custom-map-ot-server" />;
}

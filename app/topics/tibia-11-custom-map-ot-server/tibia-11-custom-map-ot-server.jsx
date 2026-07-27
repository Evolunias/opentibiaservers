import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-ot-server');
}

export default function Tibia11CustomMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-ot-server" />;
}

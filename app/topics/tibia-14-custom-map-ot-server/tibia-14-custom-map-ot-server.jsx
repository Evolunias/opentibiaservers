import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-custom-map-ot-server');
}

export default function Tibia14CustomMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-custom-map-ot-server" />;
}

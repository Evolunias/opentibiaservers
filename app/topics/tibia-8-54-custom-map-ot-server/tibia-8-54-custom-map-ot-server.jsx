import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-custom-map-ot-server');
}

export default function Tibia854CustomMapOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-custom-map-ot-server" />;
}

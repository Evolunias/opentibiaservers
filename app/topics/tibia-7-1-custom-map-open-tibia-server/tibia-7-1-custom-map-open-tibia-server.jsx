import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-custom-map-open-tibia-server');
}

export default function Tibia71CustomMapOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-custom-map-open-tibia-server" />;
}

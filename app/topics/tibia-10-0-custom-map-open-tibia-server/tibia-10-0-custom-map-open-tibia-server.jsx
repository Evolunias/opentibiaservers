import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-custom-map-open-tibia-server');
}

export default function Tibia100CustomMapOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-custom-map-open-tibia-server" />;
}

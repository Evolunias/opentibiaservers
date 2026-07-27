import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-custom-map-open-tibia-server');
}

export default function Tibia96CustomMapOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-custom-map-open-tibia-server" />;
}

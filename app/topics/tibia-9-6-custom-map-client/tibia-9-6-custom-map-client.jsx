import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-custom-map-client');
}

export default function Tibia96CustomMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-custom-map-client" />;
}

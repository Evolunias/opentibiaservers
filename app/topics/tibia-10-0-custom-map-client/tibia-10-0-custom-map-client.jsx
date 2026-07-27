import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-custom-map-client');
}

export default function Tibia100CustomMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-custom-map-client" />;
}

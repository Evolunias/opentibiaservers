import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-custom-map-client');
}

export default function Tibia81CustomMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-custom-map-client" />;
}

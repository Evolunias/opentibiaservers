import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-custom-map-client');
}

export default function Tibia71CustomMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-custom-map-client" />;
}

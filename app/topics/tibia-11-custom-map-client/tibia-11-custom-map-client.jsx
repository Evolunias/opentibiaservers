import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-client');
}

export default function Tibia11CustomMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-client" />;
}

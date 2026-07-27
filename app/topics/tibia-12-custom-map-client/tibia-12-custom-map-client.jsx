import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-custom-map-client');
}

export default function Tibia12CustomMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-custom-map-client" />;
}

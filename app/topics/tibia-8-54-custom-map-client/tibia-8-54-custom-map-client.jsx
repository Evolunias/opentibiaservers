import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-custom-map-client');
}

export default function Tibia854CustomMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-custom-map-client" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-custom-map-client');
}

export default function Tibia1098CustomMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-custom-map-client" />;
}

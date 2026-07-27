import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-custom-map-client');
}

export default function Tibia74CustomMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-custom-map-client" />;
}

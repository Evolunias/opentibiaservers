import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-real-map-client');
}

export default function Tibia84RealMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-real-map-client" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-client');
}

export default function Tibia96RealMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-client" />;
}

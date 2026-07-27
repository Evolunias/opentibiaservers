import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-real-map-client');
}

export default function Tibia76RealMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-real-map-client" />;
}

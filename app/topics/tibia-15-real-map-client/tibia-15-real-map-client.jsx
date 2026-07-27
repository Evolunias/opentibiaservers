import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-real-map-client');
}

export default function Tibia15RealMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-real-map-client" />;
}

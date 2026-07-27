import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-real-map-client');
}

export default function Tibia12RealMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-real-map-client" />;
}

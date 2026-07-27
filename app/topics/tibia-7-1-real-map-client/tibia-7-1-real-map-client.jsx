import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-real-map-client');
}

export default function Tibia71RealMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-real-map-client" />;
}

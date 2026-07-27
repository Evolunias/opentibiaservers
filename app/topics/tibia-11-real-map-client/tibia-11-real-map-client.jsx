import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-client');
}

export default function Tibia11RealMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-client" />;
}

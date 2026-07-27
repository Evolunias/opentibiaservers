import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-real-map-client');
}

export default function Tibia100RealMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-real-map-client" />;
}

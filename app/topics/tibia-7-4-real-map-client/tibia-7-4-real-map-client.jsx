import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-real-map-client');
}

export default function Tibia74RealMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-real-map-client" />;
}

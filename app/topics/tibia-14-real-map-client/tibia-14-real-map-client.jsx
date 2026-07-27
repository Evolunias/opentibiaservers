import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-real-map-client');
}

export default function Tibia14RealMapClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-real-map-client" />;
}

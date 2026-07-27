import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-real-map');
}

export default function Tibia86ServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-real-map" />;
}

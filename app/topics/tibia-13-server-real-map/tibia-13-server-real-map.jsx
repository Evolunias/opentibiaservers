import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-real-map');
}

export default function Tibia13ServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-real-map" />;
}

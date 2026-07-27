import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-real-map');
}

export default function Tibia1098ServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-real-map" />;
}

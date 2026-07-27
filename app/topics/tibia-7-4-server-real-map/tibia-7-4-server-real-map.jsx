import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-real-map');
}

export default function Tibia74ServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-real-map" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-real-map');
}

export default function PvpeServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-real-map" />;
}

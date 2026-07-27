import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-real-map');
}

export default function TibiaRealMapServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-real-map" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-real-map');
}

export default function TibiaPrivateServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-real-map" />;
}

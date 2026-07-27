import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-client');
}

export default function TibiaRealMapServerClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-client" />;
}

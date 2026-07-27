import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server');
}

export default function TibiaRealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-usa');
}

export default function TibiaRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-usa" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-mexico');
}

export default function TibiaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-mexico" />;
}

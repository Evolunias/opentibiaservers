import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-argentina');
}

export default function TibiaRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-argentina" />;
}

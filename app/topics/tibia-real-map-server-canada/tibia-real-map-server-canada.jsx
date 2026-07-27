import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-canada');
}

export default function TibiaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-canada" />;
}

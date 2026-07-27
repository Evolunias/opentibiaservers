import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-server-canada');
}

export default function TibiaraRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-server-canada" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-canada');
}

export default function TibiaraRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-canada" />;
}

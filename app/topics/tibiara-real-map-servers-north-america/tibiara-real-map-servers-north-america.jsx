import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-north-america');
}

export default function TibiaraRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-north-america" />;
}

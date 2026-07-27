import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-servers-latin-america');
}

export default function TibiaraRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-servers-latin-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-real-map-server-latin-america');
}

export default function TibiaraRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-real-map-server-latin-america" />;
}

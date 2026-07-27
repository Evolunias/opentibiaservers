import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-real-map-server-latin-america');
}

export default function TibiaRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibia-real-map-server-latin-america" />;
}

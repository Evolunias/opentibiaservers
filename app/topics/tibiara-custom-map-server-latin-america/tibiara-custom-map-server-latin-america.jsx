import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-custom-map-server-latin-america');
}

export default function TibiaraCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-custom-map-server-latin-america" />;
}

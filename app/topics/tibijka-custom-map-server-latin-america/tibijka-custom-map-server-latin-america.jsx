import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-server-latin-america');
}

export default function TibijkaCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-server-latin-america" />;
}

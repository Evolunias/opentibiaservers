import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-latin-america');
}

export default function TibijkaCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-latin-america" />;
}

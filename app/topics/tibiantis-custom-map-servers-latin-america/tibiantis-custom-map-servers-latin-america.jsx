import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-latin-america');
}

export default function TibiantisCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-latin-america" />;
}

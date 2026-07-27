import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-latin-america');
}

export default function TibiantisCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-latin-america" />;
}

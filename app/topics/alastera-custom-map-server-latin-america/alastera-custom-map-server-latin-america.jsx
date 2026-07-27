import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-custom-map-server-latin-america');
}

export default function AlasteraCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-custom-map-server-latin-america" />;
}

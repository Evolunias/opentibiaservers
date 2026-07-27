import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-latin-america');
}

export default function VenoreotCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-latin-america" />;
}

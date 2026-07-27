import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-latin-america');
}

export default function VenoreotCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-latin-america" />;
}

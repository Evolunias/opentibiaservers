import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-north-america');
}

export default function VenoreotCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-north-america" />;
}

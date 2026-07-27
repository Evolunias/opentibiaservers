import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-north-america');
}

export default function VenoreotCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-north-america" />;
}

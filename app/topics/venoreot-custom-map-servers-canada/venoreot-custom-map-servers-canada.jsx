import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-canada');
}

export default function VenoreotCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-canada" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-usa');
}

export default function VenoreotCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-usa" />;
}

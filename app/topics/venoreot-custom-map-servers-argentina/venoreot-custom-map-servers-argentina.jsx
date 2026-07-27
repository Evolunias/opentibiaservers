import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-argentina');
}

export default function VenoreotCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-argentina" />;
}

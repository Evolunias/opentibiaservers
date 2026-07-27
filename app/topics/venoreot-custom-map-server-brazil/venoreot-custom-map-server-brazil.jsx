import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-brazil');
}

export default function VenoreotCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-brazil" />;
}

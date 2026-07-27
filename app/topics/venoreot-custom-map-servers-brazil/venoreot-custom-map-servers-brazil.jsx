import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-brazil');
}

export default function VenoreotCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-brazil" />;
}

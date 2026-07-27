import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-mexico');
}

export default function VenoreotCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-mexico" />;
}

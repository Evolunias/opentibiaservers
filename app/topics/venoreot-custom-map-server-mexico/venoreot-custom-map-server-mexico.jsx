import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-mexico');
}

export default function VenoreotCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-mexico" />;
}

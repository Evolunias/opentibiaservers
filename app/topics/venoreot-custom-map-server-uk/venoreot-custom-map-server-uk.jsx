import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-uk');
}

export default function VenoreotCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-uk" />;
}

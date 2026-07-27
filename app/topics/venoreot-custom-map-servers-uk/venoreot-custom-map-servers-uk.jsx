import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-uk');
}

export default function VenoreotCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-uk" />;
}

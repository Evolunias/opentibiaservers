import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-europe');
}

export default function VenoreotCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-europe" />;
}

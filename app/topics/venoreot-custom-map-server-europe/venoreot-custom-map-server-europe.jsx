import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-europe');
}

export default function VenoreotCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-europe" />;
}

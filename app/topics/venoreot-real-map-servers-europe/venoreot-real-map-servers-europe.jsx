import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-servers-europe');
}

export default function VenoreotRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-servers-europe" />;
}

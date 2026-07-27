import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-server-europe');
}

export default function VenoreotRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-server-europe" />;
}

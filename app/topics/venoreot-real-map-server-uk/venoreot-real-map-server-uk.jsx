import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-server-uk');
}

export default function VenoreotRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-server-uk" />;
}

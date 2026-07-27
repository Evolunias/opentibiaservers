import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-servers-uk');
}

export default function VenoreotRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-servers-uk" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-servers-usa');
}

export default function VenoreotRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-servers-usa" />;
}

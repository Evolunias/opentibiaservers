import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-server-usa');
}

export default function VenoreotRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-server-usa" />;
}

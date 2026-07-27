import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-server-brazil');
}

export default function VenoreotRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-server-brazil" />;
}

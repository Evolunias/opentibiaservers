import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map');
}

export default function VenoreotRealMapKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map" />;
}

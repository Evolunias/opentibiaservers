import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-map');
}

export default function VenoreotMapKeywordPage() {
  return <StaticKeywordPage slug="venoreot-map" />;
}

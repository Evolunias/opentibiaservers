import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map');
}

export default function CarlinotRealMapKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map" />;
}

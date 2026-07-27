import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-map');
}

export default function CarlinotMapKeywordPage() {
  return <StaticKeywordPage slug="carlinot-map" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map');
}

export default function NtoStarRealMapKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map" />;
}

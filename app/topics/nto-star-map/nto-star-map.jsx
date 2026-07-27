import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-map');
}

export default function NtoStarMapKeywordPage() {
  return <StaticKeywordPage slug="nto-star-map" />;
}

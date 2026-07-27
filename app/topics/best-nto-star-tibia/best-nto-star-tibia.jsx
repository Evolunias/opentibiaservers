import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-tibia');
}

export default function BestNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-tibia" />;
}

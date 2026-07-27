import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-tibia');
}

export default function WithReviewsArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-tibia" />;
}

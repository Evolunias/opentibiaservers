import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-arcaniarl-open-tibia');
}

export default function WithReviewsArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-arcaniarl-open-tibia" />;
}

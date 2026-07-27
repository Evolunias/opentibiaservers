import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-open-tibia');
}

export default function WithReviewsClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-open-tibia" />;
}

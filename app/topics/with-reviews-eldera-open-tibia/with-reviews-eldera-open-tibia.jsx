import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-open-tibia');
}

export default function WithReviewsElderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-open-tibia" />;
}

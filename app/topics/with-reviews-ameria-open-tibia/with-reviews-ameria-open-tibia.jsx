import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-open-tibia');
}

export default function WithReviewsAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-open-tibia" />;
}

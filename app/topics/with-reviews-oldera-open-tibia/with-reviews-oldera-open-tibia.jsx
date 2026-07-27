import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-open-tibia');
}

export default function WithReviewsOlderaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-open-tibia" />;
}

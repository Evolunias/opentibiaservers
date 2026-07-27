import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-guide');
}

export default function WithReviewsElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-guide" />;
}

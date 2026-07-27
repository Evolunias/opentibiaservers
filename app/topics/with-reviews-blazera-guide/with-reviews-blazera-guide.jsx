import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-guide');
}

export default function WithReviewsBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-guide" />;
}

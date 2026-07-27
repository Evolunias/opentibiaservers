import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-poland');
}

export default function WithReviewsGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-poland" />;
}

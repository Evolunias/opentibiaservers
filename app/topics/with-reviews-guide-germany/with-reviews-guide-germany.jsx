import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-germany');
}

export default function WithReviewsGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-germany" />;
}

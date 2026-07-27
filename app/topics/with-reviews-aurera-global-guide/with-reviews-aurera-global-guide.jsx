import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-guide');
}

export default function WithReviewsAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-guide" />;
}

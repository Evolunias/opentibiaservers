import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-originaltibia-guide');
}

export default function WithReviewsOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-originaltibia-guide" />;
}

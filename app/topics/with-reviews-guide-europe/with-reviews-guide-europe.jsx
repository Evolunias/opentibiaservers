import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-europe');
}

export default function WithReviewsGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-europe" />;
}

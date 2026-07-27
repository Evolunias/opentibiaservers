import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-usa');
}

export default function WithReviewsGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-usa" />;
}

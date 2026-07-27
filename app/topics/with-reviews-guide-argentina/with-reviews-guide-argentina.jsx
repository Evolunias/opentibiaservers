import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-guide-argentina');
}

export default function WithReviewsGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-guide-argentina" />;
}

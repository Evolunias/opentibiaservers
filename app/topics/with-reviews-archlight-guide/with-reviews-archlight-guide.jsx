import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-guide');
}

export default function WithReviewsArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-guide" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-guide');
}

export default function WithReviewsDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-guide" />;
}

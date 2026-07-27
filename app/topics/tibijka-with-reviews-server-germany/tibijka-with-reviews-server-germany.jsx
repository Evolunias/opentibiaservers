import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-germany');
}

export default function TibijkaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-germany" />;
}

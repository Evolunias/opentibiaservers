import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-germany');
}

export default function TibianusWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-germany" />;
}

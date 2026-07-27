import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-germany');
}

export default function UnlineWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-germany" />;
}

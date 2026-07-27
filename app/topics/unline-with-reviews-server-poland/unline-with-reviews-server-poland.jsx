import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-poland');
}

export default function UnlineWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-poland" />;
}

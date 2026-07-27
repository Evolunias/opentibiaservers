import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-europe');
}

export default function UnlineWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-europe" />;
}

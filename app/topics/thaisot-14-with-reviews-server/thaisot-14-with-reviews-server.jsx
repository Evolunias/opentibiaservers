import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-with-reviews-server');
}

export default function Thaisot14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-with-reviews-server" />;
}

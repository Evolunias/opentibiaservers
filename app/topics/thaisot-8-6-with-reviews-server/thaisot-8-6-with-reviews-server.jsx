import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-6-with-reviews-server');
}

export default function Thaisot86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-6-with-reviews-server" />;
}

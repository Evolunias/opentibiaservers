import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-with-reviews-server');
}

export default function Thaisot11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-with-reviews-server" />;
}

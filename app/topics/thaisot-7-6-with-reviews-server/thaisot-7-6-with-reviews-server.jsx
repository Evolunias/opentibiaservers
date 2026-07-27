import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-6-with-reviews-server');
}

export default function Thaisot76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-6-with-reviews-server" />;
}

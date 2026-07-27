import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-98-with-reviews-server');
}

export default function Thaisot1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-98-with-reviews-server" />;
}

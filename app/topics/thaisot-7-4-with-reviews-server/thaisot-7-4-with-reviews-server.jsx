import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-with-reviews-server');
}

export default function Thaisot74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-with-reviews-server" />;
}

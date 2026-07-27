import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-with-reviews-server');
}

export default function Thaisot12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-with-reviews-server" />;
}

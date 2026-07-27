import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-with-reviews-server');
}

export default function Medivia71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-with-reviews-server" />;
}

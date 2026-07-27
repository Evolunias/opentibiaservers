import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-with-reviews-server');
}

export default function Medivia12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-with-reviews-server" />;
}

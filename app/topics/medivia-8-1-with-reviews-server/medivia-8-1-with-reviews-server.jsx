import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-with-reviews-server');
}

export default function Medivia81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-with-reviews-server" />;
}

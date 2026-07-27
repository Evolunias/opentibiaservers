import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-54-with-reviews-server');
}

export default function Medivia854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-54-with-reviews-server" />;
}

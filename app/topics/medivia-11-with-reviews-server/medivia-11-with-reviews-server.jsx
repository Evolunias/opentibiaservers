import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-with-reviews-server');
}

export default function Medivia11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-with-reviews-server" />;
}

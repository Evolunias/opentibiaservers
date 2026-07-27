import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-with-reviews-server');
}

export default function Medivia14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-with-reviews-server" />;
}

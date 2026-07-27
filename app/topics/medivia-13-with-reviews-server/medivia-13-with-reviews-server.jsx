import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-with-reviews-server');
}

export default function Medivia13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-with-reviews-server" />;
}

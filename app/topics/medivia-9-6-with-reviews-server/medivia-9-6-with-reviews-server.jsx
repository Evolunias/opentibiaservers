import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-with-reviews-server');
}

export default function Medivia96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-with-reviews-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-with-reviews-server');
}

export default function Medivia84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-with-reviews-server" />;
}

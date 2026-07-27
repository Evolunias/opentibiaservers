import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-with-reviews-server');
}

export default function Medivia76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-with-reviews-server" />;
}

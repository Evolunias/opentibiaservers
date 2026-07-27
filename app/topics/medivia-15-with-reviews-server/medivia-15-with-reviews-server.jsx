import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-with-reviews-server');
}

export default function Medivia15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-with-reviews-server" />;
}

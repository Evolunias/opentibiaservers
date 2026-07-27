import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-with-reviews-server');
}

export default function Medivia86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-with-reviews-server" />;
}

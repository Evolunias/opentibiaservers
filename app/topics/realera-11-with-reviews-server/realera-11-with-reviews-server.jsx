import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-with-reviews-server');
}

export default function Realera11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-with-reviews-server" />;
}

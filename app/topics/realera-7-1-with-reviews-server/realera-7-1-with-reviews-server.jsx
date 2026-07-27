import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-with-reviews-server');
}

export default function Realera71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-with-reviews-server" />;
}

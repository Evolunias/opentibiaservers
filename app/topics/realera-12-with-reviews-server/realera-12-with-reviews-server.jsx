import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-with-reviews-server');
}

export default function Realera12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-with-reviews-server" />;
}

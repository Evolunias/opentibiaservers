import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-with-reviews-server');
}

export default function Realera13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-with-reviews-server" />;
}

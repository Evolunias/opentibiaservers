import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-with-reviews-server');
}

export default function Realera84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-with-reviews-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-with-reviews-server');
}

export default function Realera96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-with-reviews-server" />;
}

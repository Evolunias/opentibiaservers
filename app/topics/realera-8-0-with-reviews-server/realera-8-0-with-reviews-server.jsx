import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-with-reviews-server');
}

export default function Realera80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-with-reviews-server" />;
}

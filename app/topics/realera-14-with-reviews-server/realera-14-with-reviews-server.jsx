import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-with-reviews-server');
}

export default function Realera14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-with-reviews-server" />;
}

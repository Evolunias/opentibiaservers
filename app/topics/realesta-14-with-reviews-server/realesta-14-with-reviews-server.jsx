import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-with-reviews-server');
}

export default function Realesta14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-with-reviews-server" />;
}

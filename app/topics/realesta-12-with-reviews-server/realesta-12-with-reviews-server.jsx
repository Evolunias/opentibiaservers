import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-with-reviews-server');
}

export default function Realesta12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-with-reviews-server" />;
}

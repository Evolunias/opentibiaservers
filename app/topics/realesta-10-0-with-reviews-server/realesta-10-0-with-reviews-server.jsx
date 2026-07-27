import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-with-reviews-server');
}

export default function Realesta100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-with-reviews-server" />;
}

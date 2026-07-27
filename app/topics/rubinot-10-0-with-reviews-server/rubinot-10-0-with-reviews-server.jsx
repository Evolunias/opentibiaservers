import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-with-reviews-server');
}

export default function Rubinot100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-with-reviews-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-4-with-reviews-server');
}

export default function Rubinot74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-4-with-reviews-server" />;
}

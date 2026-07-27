import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-with-reviews-server');
}

export default function Rubinot86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-with-reviews-server" />;
}

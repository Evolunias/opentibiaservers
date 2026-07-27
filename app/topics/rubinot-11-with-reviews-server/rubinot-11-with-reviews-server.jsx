import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-with-reviews-server');
}

export default function Rubinot11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-with-reviews-server" />;
}

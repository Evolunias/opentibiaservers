import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-6-with-reviews-server');
}

export default function Rubinot76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-6-with-reviews-server" />;
}

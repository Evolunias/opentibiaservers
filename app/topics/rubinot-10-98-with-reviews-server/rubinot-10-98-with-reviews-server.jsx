import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-98-with-reviews-server');
}

export default function Rubinot1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-98-with-reviews-server" />;
}

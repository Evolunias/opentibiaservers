import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-with-reviews-server');
}

export default function Rubinot12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-with-reviews-server" />;
}

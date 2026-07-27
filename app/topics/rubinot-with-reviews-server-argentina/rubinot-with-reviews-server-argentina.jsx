import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-argentina');
}

export default function RubinotWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-germany');
}

export default function RubinotWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-germany" />;
}

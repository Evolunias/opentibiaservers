import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-poland');
}

export default function RubinotWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-poland" />;
}

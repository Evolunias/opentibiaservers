import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-uk');
}

export default function RubinotWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-uk" />;
}

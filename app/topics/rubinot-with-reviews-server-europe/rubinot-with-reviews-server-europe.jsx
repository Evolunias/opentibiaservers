import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-europe');
}

export default function RubinotWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-europe" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-reviews-server-france');
}

export default function RubinotWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-reviews-server-france" />;
}

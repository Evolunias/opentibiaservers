import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-france');
}

export default function ThaisotWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-france" />;
}

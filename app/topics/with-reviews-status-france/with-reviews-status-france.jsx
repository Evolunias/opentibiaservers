import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-france');
}

export default function WithReviewsStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-france" />;
}

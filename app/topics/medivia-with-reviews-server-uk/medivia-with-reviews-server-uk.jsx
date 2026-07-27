import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-uk');
}

export default function MediviaWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-uk" />;
}

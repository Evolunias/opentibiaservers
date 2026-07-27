import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-poland');
}

export default function MediviaWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-poland" />;
}

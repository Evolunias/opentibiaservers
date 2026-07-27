import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-reviews-server-germany');
}

export default function MediviaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-reviews-server-germany" />;
}

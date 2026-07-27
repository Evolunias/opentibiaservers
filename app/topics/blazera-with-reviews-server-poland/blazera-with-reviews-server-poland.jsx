import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-poland');
}

export default function BlazeraWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-poland" />;
}

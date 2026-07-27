import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-germany');
}

export default function BlazeraWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-germany" />;
}

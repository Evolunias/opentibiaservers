import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-south-america');
}

export default function BlazeraWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-south-america" />;
}

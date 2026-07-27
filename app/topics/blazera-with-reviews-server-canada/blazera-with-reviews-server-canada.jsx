import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-canada');
}

export default function BlazeraWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-canada" />;
}

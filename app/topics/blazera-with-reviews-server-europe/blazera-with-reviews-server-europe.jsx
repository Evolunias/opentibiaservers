import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-europe');
}

export default function BlazeraWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-europe" />;
}

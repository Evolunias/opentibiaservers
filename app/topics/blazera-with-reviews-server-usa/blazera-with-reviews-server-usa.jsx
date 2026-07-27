import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-usa');
}

export default function BlazeraWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-usa" />;
}

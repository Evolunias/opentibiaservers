import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-brazil');
}

export default function BlazeraWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-brazil" />;
}

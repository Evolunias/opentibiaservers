import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-mexico');
}

export default function BlazeraWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-mexico" />;
}

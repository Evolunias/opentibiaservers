import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-argentina');
}

export default function BlazeraWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-argentina" />;
}

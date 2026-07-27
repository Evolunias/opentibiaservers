import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-reviews-server-france');
}

export default function BlazeraWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-reviews-server-france" />;
}

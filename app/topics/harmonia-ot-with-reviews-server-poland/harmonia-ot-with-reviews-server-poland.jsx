import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-reviews-server-poland');
}

export default function HarmoniaOtWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-reviews-server-poland" />;
}

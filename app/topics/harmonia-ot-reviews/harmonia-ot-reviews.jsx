import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-reviews');
}

export default function HarmoniaOtReviewsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-reviews" />;
}

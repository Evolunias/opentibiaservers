import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-tibia');
}

export default function WithReviewsHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-tibia" />;
}

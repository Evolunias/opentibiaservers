import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-open-tibia');
}

export default function WithReviewsHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-open-tibia" />;
}

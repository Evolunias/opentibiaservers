import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-ot');
}

export default function WithReviewsHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-ot" />;
}

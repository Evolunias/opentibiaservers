import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot');
}

export default function WithReviewsHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot" />;
}

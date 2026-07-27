import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-ots');
}

export default function WithReviewsHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-ots" />;
}

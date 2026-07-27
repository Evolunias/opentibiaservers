import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-website');
}

export default function WithReviewsHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-website" />;
}

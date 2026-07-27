import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-website');
}

export default function WithReviewsInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-website" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-official');
}

export default function WithReviewsInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-official" />;
}

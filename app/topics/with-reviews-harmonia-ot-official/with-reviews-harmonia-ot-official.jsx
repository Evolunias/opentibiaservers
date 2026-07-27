import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-official');
}

export default function WithReviewsHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-official" />;
}

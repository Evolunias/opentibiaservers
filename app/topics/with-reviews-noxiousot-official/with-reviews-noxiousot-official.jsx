import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-noxiousot-official');
}

export default function WithReviewsNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-noxiousot-official" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-noxiousot-ots');
}

export default function WithReviewsNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-noxiousot-ots" />;
}

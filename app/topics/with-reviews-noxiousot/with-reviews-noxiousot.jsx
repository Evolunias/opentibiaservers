import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-noxiousot');
}

export default function WithReviewsNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-noxiousot" />;
}

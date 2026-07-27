import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-noxiousot-website');
}

export default function WithReviewsNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-noxiousot-website" />;
}

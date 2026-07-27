import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eternal-odyssey-website');
}

export default function WithReviewsEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eternal-odyssey-website" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ranger-s-arcani-website');
}

export default function WithReviewsRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ranger-s-arcani-website" />;
}

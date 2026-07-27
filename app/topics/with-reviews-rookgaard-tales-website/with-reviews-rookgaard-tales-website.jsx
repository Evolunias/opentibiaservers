import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-website');
}

export default function WithReviewsRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-website" />;
}

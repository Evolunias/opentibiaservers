import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rookgaard-tales-forum');
}

export default function WithReviewsRookgaardTalesForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rookgaard-tales-forum" />;
}

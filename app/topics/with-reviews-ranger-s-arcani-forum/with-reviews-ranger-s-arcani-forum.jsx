import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ranger-s-arcani-forum');
}

export default function WithReviewsRangerSArcaniForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ranger-s-arcani-forum" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-forum');
}

export default function WithReviewsElderaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-forum" />;
}

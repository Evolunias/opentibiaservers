import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-forum');
}

export default function WithReviewsNepreniaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-forum" />;
}

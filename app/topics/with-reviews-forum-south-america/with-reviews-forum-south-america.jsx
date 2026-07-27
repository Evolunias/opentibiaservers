import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-south-america');
}

export default function WithReviewsForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-south-america" />;
}

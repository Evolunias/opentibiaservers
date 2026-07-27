import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-baiak-ilusion-forum');
}

export default function WithReviewsBaiakIlusionForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-baiak-ilusion-forum" />;
}

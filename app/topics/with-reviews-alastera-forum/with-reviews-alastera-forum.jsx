import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-forum');
}

export default function WithReviewsAlasteraForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-forum" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-forum');
}

export default function WithReviewsBlazeraForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-forum" />;
}

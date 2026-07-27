import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-forum');
}

export default function WithReviewsNostaltherForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-forum" />;
}

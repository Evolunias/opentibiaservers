import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-forum');
}

export default function WithReviewsDemolidoresForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-forum" />;
}

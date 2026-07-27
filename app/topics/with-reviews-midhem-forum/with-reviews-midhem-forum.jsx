import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-forum');
}

export default function WithReviewsMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-forum" />;
}

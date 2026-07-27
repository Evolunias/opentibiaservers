import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-forum');
}

export default function WithReviewsCyntaraForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-forum" />;
}

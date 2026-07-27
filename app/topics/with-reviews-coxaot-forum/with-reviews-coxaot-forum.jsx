import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-forum');
}

export default function WithReviewsCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-forum" />;
}

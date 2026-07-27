import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-forum');
}

export default function WithReviewsMediviaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-forum" />;
}

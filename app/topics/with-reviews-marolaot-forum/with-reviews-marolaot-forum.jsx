import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-forum');
}

export default function WithReviewsMarolaotForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-forum" />;
}

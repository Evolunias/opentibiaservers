import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-forum');
}

export default function WithReviewsSabrehavenForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-forum" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-forum');
}

export default function WithReviewsSerenityForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-forum" />;
}

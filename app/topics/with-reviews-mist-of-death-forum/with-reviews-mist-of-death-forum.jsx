import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-forum');
}

export default function WithReviewsMistOfDeathForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-forum" />;
}

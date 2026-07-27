import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-forum');
}

export default function WithReviewsLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-forum" />;
}

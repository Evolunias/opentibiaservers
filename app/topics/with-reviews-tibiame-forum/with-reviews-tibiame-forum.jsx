import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-forum');
}

export default function WithReviewsTibiameForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-forum" />;
}

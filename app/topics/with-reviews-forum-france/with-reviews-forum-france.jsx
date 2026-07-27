import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-forum-france');
}

export default function WithReviewsForumFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-forum-france" />;
}

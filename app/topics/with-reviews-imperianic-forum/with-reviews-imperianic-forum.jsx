import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-forum');
}

export default function WithReviewsImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-forum" />;
}

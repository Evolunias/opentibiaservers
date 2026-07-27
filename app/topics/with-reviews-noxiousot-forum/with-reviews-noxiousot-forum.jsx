import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-noxiousot-forum');
}

export default function WithReviewsNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-noxiousot-forum" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-forum');
}

export default function WithReviewsInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-forum" />;
}

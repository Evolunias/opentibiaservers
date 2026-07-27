import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-forum');
}

export default function WithReviewsHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-forum" />;
}

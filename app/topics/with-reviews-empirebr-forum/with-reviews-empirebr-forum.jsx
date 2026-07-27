import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-empirebr-forum');
}

export default function WithReviewsEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-empirebr-forum" />;
}

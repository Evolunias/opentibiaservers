import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-forum');
}

export default function WithReviewsEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-forum" />;
}

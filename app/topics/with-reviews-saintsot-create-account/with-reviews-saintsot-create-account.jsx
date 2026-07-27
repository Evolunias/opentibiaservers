import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-saintsot-create-account');
}

export default function WithReviewsSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-saintsot-create-account" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-create-account');
}

export default function WithReviewsTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-create-account" />;
}

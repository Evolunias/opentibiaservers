import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-server');
}

export default function WithReviewsEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-server" />;
}

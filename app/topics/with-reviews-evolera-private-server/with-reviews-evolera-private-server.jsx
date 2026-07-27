import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-private-server');
}

export default function WithReviewsEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-private-server" />;
}

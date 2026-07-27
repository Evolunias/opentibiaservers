import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-private-server');
}

export default function WithReviewsMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-private-server" />;
}

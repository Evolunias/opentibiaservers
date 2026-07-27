import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-server');
}

export default function WithReviewsMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-server" />;
}

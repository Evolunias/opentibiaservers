import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-ot-server');
}

export default function WithReviewsMidhemOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-ot-server" />;
}

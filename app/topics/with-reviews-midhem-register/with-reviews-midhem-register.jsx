import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-register');
}

export default function WithReviewsMidhemRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-register" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-register');
}

export default function WithReviewsOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-register" />;
}

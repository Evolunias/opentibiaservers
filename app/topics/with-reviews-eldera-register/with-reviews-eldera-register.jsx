import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-register');
}

export default function WithReviewsElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-register" />;
}

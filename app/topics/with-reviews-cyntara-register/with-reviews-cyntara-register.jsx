import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-register');
}

export default function WithReviewsCyntaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-register" />;
}

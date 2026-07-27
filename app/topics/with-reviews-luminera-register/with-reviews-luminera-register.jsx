import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-register');
}

export default function WithReviewsLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-register" />;
}

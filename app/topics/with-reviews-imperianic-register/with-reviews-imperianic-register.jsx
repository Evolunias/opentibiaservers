import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-register');
}

export default function WithReviewsImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-register" />;
}

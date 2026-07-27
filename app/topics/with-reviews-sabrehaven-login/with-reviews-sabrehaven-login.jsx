import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-login');
}

export default function WithReviewsSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-login" />;
}

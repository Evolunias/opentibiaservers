import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-server');
}

export default function WithReviewsSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-private-server');
}

export default function WithReviewsSabrehavenPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-private-server" />;
}

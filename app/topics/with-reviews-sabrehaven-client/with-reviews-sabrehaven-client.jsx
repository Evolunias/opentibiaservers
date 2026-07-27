import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-client');
}

export default function WithReviewsSabrehavenClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-client" />;
}

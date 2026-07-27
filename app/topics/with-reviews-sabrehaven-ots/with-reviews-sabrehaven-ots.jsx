import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-ots');
}

export default function WithReviewsSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-ots" />;
}

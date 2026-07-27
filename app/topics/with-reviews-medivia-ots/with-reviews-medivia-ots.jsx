import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-ots');
}

export default function WithReviewsMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-ots" />;
}

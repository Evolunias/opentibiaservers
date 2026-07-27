import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-ots');
}

export default function WithReviewsCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-ots" />;
}

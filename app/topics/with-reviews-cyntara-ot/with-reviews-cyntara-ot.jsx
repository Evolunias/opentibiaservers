import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-ot');
}

export default function WithReviewsCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-ot" />;
}

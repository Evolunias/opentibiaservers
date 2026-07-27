import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-ots');
}

export default function WithReviewsImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-ots" />;
}

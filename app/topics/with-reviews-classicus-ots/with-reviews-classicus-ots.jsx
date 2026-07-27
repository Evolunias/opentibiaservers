import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-ots');
}

export default function WithReviewsClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-ots" />;
}

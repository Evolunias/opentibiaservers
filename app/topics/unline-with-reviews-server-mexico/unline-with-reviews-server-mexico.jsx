import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-mexico');
}

export default function UnlineWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-mexico" />;
}

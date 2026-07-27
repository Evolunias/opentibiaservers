import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-mexico');
}

export default function TibianusWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-mexico" />;
}

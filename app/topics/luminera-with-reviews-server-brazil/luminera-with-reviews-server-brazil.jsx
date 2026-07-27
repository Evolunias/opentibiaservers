import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-brazil');
}

export default function LumineraWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-brazil" />;
}

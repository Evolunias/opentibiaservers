import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-mexico');
}

export default function LumineraWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-mexico" />;
}

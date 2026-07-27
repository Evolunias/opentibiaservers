import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-mexico');
}

export default function RealeraWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-mexico" />;
}

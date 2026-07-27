import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-reviews-server-mexico');
}

export default function OxygenotWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-reviews-server-mexico" />;
}

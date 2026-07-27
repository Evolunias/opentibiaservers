import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-reviews-server-uk');
}

export default function OxygenotWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-reviews-server-uk" />;
}

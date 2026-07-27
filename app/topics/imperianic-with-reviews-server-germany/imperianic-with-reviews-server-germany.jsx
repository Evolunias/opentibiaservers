import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-reviews-server-germany');
}

export default function ImperianicWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-reviews-server-germany" />;
}

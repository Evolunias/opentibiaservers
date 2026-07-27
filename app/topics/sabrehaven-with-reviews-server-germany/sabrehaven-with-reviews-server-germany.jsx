import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-reviews-server-germany');
}

export default function SabrehavenWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-reviews-server-germany" />;
}

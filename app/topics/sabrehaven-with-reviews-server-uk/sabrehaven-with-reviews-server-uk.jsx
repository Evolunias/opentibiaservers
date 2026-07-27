import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-reviews-server-uk');
}

export default function SabrehavenWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-reviews-server-uk" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-reviews-server-mexico');
}

export default function SabrehavenWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-reviews-server-mexico" />;
}

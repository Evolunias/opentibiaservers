import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-reviews-server-north-america');
}

export default function SabrehavenWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-reviews-server-north-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-reviews-server-latin-america');
}

export default function SabrehavenWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-reviews-server-latin-america" />;
}

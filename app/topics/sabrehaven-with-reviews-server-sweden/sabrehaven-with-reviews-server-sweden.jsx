import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-reviews-server-sweden');
}

export default function SabrehavenWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-reviews-server-sweden" />;
}

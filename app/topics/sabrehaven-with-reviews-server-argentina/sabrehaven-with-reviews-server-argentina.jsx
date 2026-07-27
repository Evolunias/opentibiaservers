import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-reviews-server-argentina');
}

export default function SabrehavenWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-reviews-server-argentina" />;
}

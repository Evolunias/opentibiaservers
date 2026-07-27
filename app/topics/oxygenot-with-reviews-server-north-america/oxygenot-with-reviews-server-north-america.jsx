import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-reviews-server-north-america');
}

export default function OxygenotWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-reviews-server-north-america" />;
}

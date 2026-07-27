import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-reviews');
}

export default function AmeriaReviewsKeywordPage() {
  return <StaticKeywordPage slug="ameria-reviews" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-review');
}

export default function AmeriaReviewKeywordPage() {
  return <StaticKeywordPage slug="ameria-review" />;
}

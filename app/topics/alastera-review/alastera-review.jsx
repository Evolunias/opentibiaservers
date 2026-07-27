import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-review');
}

export default function AlasteraReviewKeywordPage() {
  return <StaticKeywordPage slug="alastera-review" />;
}

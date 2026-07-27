import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-review');
}

export default function ShadowcoresReviewKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-review" />;
}

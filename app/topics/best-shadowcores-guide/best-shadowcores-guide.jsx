import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-guide');
}

export default function BestShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-guide" />;
}

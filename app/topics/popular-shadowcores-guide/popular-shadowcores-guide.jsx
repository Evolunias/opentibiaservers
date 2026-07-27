import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-guide');
}

export default function PopularShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-guide" />;
}

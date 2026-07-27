import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-guide');
}

export default function TopShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-guide" />;
}

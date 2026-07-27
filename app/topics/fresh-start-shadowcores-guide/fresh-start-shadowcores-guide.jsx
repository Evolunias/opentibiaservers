import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-guide');
}

export default function FreshStartShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-guide" />;
}

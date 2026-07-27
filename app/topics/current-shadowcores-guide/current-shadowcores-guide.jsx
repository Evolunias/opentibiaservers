import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-guide');
}

export default function CurrentShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-guide" />;
}

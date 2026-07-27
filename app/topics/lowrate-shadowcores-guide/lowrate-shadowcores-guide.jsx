import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-guide');
}

export default function LowrateShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-guide" />;
}

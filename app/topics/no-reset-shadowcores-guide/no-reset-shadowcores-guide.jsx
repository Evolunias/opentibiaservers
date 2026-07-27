import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-guide');
}

export default function NoResetShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-guide" />;
}

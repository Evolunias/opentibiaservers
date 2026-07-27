import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-guide');
}

export default function ActiveShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-guide" />;
}

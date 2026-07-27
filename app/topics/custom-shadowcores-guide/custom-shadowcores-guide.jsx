import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-guide');
}

export default function CustomShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-guide" />;
}

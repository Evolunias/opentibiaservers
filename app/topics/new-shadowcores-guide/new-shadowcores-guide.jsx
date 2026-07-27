import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-guide');
}

export default function NewShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-guide" />;
}

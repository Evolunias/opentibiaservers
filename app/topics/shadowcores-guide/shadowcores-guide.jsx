import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-guide');
}

export default function ShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-guide" />;
}

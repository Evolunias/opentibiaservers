import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-guide');
}

export default function OfficialShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-guide" />;
}

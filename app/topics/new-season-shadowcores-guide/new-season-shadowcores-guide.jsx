import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-guide');
}

export default function NewSeasonShadowcoresGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-guide" />;
}

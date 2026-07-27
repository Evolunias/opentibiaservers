import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-ameria-guide');
}

export default function Keyword2026AmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-ameria-guide" />;
}

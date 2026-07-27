import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-kasteria-guide');
}

export default function Keyword2026KasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-kasteria-guide" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-oldera-guide');
}

export default function Keyword2026OlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-oldera-guide" />;
}

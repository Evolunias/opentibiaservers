import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-cyntara-guide');
}

export default function Keyword2026CyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-cyntara-guide" />;
}

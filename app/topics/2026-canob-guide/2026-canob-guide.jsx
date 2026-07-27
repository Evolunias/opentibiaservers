import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-canob-guide');
}

export default function Keyword2026CanobGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-canob-guide" />;
}

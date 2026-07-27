import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-yurots-guide');
}

export default function Keyword2026YurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-yurots-guide" />;
}

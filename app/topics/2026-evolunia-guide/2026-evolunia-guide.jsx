import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-evolunia-guide');
}

export default function Keyword2026EvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-evolunia-guide" />;
}

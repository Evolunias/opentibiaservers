import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-arcaniarl-guide');
}

export default function Keyword2026ArcaniarlGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-arcaniarl-guide" />;
}

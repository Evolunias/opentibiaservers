import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-nto-star-guide');
}

export default function Keyword2026NtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-nto-star-guide" />;
}

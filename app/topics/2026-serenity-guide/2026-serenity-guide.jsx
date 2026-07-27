import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-serenity-guide');
}

export default function Keyword2026SerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-serenity-guide" />;
}

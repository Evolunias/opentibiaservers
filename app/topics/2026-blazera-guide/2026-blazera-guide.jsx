import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-blazera-guide');
}

export default function Keyword2026BlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-blazera-guide" />;
}

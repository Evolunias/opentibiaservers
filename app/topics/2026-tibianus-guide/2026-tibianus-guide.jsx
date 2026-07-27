import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-tibianus-guide');
}

export default function Keyword2026TibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-tibianus-guide" />;
}

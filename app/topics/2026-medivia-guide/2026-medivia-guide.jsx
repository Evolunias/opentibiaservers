import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-medivia-guide');
}

export default function Keyword2026MediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-medivia-guide" />;
}

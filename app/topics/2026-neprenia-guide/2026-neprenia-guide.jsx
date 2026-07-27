import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-neprenia-guide');
}

export default function Keyword2026NepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="2026-neprenia-guide" />;
}

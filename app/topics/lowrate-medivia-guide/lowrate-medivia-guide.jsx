import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-guide');
}

export default function LowrateMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-guide" />;
}

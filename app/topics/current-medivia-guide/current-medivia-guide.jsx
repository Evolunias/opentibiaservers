import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-guide');
}

export default function CurrentMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-guide" />;
}

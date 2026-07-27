import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-guide');
}

export default function HighrateMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-guide" />;
}

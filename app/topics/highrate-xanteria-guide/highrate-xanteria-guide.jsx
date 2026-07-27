import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-guide');
}

export default function HighrateXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-guide" />;
}

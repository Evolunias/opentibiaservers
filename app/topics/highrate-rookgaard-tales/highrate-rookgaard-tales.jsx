import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales');
}

export default function HighrateRookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales" />;
}

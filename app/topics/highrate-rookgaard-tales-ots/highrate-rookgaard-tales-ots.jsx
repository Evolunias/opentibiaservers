import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-ots');
}

export default function HighrateRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-ots" />;
}

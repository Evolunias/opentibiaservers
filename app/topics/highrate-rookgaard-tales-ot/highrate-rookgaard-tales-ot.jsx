import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-ot');
}

export default function HighrateRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-ot" />;
}

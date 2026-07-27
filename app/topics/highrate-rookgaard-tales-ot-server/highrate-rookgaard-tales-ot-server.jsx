import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-ot-server');
}

export default function HighrateRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-ot-server" />;
}

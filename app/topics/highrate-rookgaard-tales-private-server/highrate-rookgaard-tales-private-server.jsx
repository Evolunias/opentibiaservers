import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-private-server');
}

export default function HighrateRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-private-server" />;
}

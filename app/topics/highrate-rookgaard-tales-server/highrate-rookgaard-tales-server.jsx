import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-server');
}

export default function HighrateRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-server" />;
}

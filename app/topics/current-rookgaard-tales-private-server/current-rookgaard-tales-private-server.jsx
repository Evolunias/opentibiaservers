import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-private-server');
}

export default function CurrentRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-private-server" />;
}

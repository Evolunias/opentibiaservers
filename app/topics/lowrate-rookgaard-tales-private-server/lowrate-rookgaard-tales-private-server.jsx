import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-private-server');
}

export default function LowrateRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-private-server" />;
}

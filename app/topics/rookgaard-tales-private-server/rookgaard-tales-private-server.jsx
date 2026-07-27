import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-private-server');
}

export default function RookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-private-server" />;
}

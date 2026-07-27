import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-private-server');
}

export default function TopRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-private-server" />;
}

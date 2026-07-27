import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-private-server');
}

export default function BestRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-private-server" />;
}

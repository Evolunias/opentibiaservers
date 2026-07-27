import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-private-server');
}

export default function FreshStartRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-private-server" />;
}

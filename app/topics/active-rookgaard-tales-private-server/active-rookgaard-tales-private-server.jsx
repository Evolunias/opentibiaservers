import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-private-server');
}

export default function ActiveRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-private-server" />;
}

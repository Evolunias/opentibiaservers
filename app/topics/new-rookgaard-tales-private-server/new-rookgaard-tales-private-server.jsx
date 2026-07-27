import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-private-server');
}

export default function NewRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-private-server" />;
}

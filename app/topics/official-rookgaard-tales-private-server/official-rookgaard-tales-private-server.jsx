import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-private-server');
}

export default function OfficialRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-private-server" />;
}

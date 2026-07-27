import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-private-server');
}

export default function CustomRookgaardTalesPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-private-server" />;
}

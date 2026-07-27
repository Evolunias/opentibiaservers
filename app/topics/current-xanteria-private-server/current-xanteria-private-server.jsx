import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-private-server');
}

export default function CurrentXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-private-server" />;
}

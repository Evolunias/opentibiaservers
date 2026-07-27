import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-private-server');
}

export default function CurrentRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-private-server" />;
}

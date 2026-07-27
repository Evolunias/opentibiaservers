import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-private-server');
}

export default function LowrateRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-private-server" />;
}

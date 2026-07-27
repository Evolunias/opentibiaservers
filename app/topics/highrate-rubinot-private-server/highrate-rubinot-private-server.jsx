import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-private-server');
}

export default function HighrateRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-private-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-private-server');
}

export default function NoResetRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-private-server" />;
}

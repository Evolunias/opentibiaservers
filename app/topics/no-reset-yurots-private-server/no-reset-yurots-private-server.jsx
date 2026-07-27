import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-private-server');
}

export default function NoResetYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-private-server" />;
}

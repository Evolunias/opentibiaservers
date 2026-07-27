import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-private-server');
}

export default function NoResetCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-private-server" />;
}

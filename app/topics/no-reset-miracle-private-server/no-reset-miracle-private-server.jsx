import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-private-server');
}

export default function NoResetMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-private-server" />;
}

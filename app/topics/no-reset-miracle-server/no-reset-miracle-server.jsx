import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-server');
}

export default function NoResetMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-server" />;
}

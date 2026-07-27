import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-ot-server');
}

export default function NoResetMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-ot-server" />;
}

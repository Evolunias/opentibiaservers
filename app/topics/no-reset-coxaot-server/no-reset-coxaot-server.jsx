import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-server');
}

export default function NoResetCoxaotServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-ot-server');
}

export default function NoResetCoxaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-ot-server" />;
}

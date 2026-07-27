import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-no-reset-server');
}

export default function Coxaot14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-no-reset-server" />;
}

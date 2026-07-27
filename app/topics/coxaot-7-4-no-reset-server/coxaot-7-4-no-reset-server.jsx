import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-4-no-reset-server');
}

export default function Coxaot74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-4-no-reset-server" />;
}

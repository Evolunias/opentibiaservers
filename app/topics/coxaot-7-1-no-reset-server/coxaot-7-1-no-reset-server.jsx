import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-1-no-reset-server');
}

export default function Coxaot71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-1-no-reset-server" />;
}

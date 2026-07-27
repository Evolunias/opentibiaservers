import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-9-6-no-reset-server');
}

export default function Coxaot96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-9-6-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-no-reset-server');
}

export default function Coxaot81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-no-reset-server" />;
}

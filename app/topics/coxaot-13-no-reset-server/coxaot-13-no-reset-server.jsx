import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-no-reset-server');
}

export default function Coxaot13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-no-reset-server" />;
}

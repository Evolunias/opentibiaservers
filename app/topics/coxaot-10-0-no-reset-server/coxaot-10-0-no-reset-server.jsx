import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-no-reset-server');
}

export default function Coxaot100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-no-reset-server');
}

export default function Coxaot15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-no-reset-server" />;
}

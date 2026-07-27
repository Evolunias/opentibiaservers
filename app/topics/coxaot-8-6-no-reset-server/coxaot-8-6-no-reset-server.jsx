import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-6-no-reset-server');
}

export default function Coxaot86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-6-no-reset-server" />;
}

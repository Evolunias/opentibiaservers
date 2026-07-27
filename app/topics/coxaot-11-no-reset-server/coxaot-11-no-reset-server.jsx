import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-no-reset-server');
}

export default function Coxaot11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-no-reset-server');
}

export default function Coxaot12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-no-reset-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-no-reset-server');
}

export default function Coxaot76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-no-reset-server" />;
}

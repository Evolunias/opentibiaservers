import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-4-no-reset-server');
}

export default function Coxaot84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-4-no-reset-server" />;
}

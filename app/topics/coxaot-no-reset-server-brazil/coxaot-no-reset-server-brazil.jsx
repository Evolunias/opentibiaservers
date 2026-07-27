import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-brazil');
}

export default function CoxaotNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-brazil" />;
}

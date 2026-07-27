import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-germany');
}

export default function CoxaotNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-germany" />;
}

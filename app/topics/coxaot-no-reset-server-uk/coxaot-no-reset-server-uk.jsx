import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-uk');
}

export default function CoxaotNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-uk" />;
}

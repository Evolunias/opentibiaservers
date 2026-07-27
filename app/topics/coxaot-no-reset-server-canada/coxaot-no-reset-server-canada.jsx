import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-canada');
}

export default function CoxaotNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-canada" />;
}

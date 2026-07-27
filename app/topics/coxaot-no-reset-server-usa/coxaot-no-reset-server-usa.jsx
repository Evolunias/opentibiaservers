import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-usa');
}

export default function CoxaotNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-usa" />;
}

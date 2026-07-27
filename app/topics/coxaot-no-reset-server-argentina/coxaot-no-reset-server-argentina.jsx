import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-argentina');
}

export default function CoxaotNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-argentina" />;
}

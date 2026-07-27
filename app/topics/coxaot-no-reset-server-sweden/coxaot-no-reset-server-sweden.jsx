import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-no-reset-server-sweden');
}

export default function CoxaotNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-no-reset-server-sweden" />;
}

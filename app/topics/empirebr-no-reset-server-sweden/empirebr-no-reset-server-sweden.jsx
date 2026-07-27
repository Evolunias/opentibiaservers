import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-sweden');
}

export default function EmpirebrNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-sweden" />;
}

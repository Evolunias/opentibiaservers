import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-argentina');
}

export default function EmpirebrNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-argentina" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-brazil');
}

export default function EmpirebrNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-brazil" />;
}

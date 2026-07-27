import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-usa');
}

export default function EmpirebrNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-usa" />;
}

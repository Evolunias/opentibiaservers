import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-uk');
}

export default function EmpirebrNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-uk" />;
}

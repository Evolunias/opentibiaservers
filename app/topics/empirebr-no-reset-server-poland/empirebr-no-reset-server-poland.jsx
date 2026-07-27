import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-poland');
}

export default function EmpirebrNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-poland" />;
}

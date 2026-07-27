import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-canada');
}

export default function EmpirebrNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-canada" />;
}

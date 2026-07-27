import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-north-america');
}

export default function EmpirebrNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-north-america" />;
}

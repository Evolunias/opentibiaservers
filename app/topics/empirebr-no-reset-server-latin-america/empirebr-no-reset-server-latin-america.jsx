import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-latin-america');
}

export default function EmpirebrNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-latin-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-latin-america');
}

export default function EmpirebrNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-latin-america" />;
}

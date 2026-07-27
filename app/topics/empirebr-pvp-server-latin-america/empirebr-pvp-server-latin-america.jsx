import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-latin-america');
}

export default function EmpirebrPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-latin-america" />;
}

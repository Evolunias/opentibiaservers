import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-latin-america');
}

export default function EmpirebrPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-latin-america" />;
}

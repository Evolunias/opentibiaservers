import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-north-america');
}

export default function EmpirebrPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-north-america" />;
}

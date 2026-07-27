import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-south-america');
}

export default function EmpirebrPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-south-america" />;
}

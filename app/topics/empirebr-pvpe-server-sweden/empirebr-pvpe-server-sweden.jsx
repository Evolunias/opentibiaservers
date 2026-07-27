import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-sweden');
}

export default function EmpirebrPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-sweden" />;
}

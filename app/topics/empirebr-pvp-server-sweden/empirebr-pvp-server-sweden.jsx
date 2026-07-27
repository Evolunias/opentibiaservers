import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-sweden');
}

export default function EmpirebrPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-sweden" />;
}

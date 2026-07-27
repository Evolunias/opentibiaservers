import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-sweden');
}

export default function EmpirebrNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-sweden" />;
}

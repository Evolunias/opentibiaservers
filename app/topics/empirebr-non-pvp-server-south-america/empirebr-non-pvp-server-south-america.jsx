import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-south-america');
}

export default function EmpirebrNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-south-america" />;
}

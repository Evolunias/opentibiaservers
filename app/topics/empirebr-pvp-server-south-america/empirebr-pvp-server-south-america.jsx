import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-south-america');
}

export default function EmpirebrPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-south-america" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-canada');
}

export default function EmpirebrPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-canada" />;
}

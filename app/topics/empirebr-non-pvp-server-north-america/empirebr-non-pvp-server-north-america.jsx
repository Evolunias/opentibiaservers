import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-north-america');
}

export default function EmpirebrNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-north-america" />;
}

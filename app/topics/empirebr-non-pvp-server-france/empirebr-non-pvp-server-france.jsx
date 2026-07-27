import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-france');
}

export default function EmpirebrNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-france" />;
}

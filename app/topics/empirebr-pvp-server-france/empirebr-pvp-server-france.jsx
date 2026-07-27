import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-france');
}

export default function EmpirebrPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-france" />;
}

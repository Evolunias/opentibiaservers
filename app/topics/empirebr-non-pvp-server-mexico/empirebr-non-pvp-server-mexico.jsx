import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-mexico');
}

export default function EmpirebrNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-mexico" />;
}

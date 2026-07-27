import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-mexico');
}

export default function EmpirebrPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-mexico" />;
}

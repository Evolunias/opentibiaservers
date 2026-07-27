import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-brazil');
}

export default function EmpirebrNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-brazil" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-brazil');
}

export default function EmpirebrPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-brazil" />;
}

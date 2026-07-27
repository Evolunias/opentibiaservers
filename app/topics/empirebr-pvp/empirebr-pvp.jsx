import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp');
}

export default function EmpirebrPvpKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp" />;
}

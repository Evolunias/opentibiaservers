import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-uk');
}

export default function EmpirebrPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-uk" />;
}

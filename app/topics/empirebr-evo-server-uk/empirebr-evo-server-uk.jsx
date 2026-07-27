import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-uk');
}

export default function EmpirebrEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-uk" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-servers-poland');
}

export default function EmpirebrEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-servers-poland" />;
}

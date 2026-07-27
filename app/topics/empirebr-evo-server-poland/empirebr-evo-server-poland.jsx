import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-evo-server-poland');
}

export default function EmpirebrEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-evo-server-poland" />;
}

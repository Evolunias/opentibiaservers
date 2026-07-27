import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-servers-poland');
}

export default function CoxaotEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-servers-poland" />;
}

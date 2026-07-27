import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-poland');
}

export default function CoxaotEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-poland" />;
}

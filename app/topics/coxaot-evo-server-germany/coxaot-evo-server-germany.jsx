import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-germany');
}

export default function CoxaotEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-germany" />;
}

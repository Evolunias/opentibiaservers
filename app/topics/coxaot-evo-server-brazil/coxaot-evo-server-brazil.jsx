import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-brazil');
}

export default function CoxaotEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-brazil" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-servers-brazil');
}

export default function CoxaotEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-servers-brazil" />;
}

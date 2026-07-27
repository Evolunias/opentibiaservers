import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-latin-america');
}

export default function CoxaotEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-latin-america" />;
}

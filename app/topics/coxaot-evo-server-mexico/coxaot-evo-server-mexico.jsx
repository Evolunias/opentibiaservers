import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-mexico');
}

export default function CoxaotEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-mexico" />;
}

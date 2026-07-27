import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-canada');
}

export default function CoxaotEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-canada" />;
}

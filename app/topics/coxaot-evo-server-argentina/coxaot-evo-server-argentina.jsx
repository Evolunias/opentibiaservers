import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-argentina');
}

export default function CoxaotEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-argentina" />;
}

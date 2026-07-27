import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-usa');
}

export default function CoxaotEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-usa" />;
}

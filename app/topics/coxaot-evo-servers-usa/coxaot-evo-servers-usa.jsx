import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-servers-usa');
}

export default function CoxaotEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-servers-usa" />;
}

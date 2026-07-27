import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-sweden');
}

export default function CoxaotEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-sweden" />;
}

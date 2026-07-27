import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-south-america');
}

export default function CoxaotEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-south-america" />;
}

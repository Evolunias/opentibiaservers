import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-europe');
}

export default function CoxaotEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-europe" />;
}

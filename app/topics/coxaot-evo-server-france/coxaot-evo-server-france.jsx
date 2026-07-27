import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-evo-server-france');
}

export default function CoxaotEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="coxaot-evo-server-france" />;
}

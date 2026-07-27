import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-uk');
}

export default function NoxiousotEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-uk" />;
}

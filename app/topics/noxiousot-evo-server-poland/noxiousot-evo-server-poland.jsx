import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-poland');
}

export default function NoxiousotEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-poland" />;
}

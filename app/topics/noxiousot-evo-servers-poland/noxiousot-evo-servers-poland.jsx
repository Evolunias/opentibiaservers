import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-servers-poland');
}

export default function NoxiousotEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-servers-poland" />;
}

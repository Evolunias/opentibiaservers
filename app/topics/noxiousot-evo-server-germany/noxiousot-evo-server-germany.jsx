import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-germany');
}

export default function NoxiousotEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-germany" />;
}

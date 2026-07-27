import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-argentina');
}

export default function NoxiousotEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-argentina" />;
}

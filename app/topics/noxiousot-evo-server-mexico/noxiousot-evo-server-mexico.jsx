import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-mexico');
}

export default function NoxiousotEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-mexico" />;
}

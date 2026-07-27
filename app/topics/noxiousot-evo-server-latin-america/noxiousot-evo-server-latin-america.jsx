import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-latin-america');
}

export default function NoxiousotEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-latin-america" />;
}

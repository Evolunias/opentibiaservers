import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-france');
}

export default function NoxiousotEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-france" />;
}

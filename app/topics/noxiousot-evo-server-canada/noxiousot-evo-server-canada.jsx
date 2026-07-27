import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-canada');
}

export default function NoxiousotEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-canada" />;
}

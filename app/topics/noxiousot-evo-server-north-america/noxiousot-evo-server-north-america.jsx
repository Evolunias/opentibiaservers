import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-north-america');
}

export default function NoxiousotEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-north-america" />;
}

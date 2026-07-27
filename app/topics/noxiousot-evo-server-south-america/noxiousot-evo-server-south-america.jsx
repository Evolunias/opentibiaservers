import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-south-america');
}

export default function NoxiousotEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-south-america" />;
}

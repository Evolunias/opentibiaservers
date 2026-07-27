import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-sweden');
}

export default function NoxiousotEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-sweden" />;
}

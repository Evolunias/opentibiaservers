import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-server-usa');
}

export default function NoxiousotEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-server-usa" />;
}

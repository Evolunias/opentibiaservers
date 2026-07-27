import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-servers-usa');
}

export default function NoxiousotEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-servers-usa" />;
}

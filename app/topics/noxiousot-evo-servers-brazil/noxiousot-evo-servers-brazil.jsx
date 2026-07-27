import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-evo-servers-brazil');
}

export default function NoxiousotEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-evo-servers-brazil" />;
}

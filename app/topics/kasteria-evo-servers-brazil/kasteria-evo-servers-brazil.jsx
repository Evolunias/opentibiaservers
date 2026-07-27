import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-servers-brazil');
}

export default function KasteriaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-servers-brazil" />;
}

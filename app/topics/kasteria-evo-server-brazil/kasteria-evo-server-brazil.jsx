import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-brazil');
}

export default function KasteriaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-brazil" />;
}

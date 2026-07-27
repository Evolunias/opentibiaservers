import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-mexico');
}

export default function KasteriaEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-mexico" />;
}

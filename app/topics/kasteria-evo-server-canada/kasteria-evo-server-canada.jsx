import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-canada');
}

export default function KasteriaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-canada" />;
}

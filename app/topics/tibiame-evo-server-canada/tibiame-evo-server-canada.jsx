import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-canada');
}

export default function TibiameEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-canada" />;
}

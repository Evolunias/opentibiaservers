import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-france');
}

export default function TibiameEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-france" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-mexico');
}

export default function TibiameEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-mexico" />;
}

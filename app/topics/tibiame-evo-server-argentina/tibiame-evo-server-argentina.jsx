import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-argentina');
}

export default function TibiameEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-argentina" />;
}

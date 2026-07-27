import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-usa');
}

export default function TibiameEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-usa" />;
}

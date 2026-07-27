import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-sweden');
}

export default function TibiameEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-sweden" />;
}

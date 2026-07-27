import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-brazil');
}

export default function TibiameEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-brazil" />;
}

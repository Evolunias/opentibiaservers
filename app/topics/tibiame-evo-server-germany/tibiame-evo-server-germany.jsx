import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-germany');
}

export default function TibiameEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-germany" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-poland');
}

export default function TibiameEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-poland" />;
}

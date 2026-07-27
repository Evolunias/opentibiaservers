import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-europe');
}

export default function TibiameEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-europe" />;
}

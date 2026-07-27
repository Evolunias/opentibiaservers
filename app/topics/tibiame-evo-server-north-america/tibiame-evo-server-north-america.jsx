import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-north-america');
}

export default function TibiameEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-north-america" />;
}

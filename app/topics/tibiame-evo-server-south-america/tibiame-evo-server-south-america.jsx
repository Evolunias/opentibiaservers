import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-server-south-america');
}

export default function TibiameEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-server-south-america" />;
}

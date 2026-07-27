import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-servers-usa');
}

export default function TibiameEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-servers-usa" />;
}

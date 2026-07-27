import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-evo-servers-brazil');
}

export default function TibiameEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-evo-servers-brazil" />;
}

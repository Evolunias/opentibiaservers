import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-sweden');
}

export default function KasteriaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-sweden" />;
}

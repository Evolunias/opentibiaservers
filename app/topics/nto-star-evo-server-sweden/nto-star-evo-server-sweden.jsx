import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-sweden');
}

export default function NtoStarEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-sweden" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-argentina');
}

export default function NtoStarEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-argentina" />;
}

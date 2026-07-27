import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-mexico');
}

export default function NtoStarEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-mexico" />;
}

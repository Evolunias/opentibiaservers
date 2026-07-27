import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-uk');
}

export default function NtoStarEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-uk" />;
}

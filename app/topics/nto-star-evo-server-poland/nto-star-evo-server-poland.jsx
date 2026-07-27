import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-poland');
}

export default function NtoStarEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-poland" />;
}

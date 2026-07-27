import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-servers-poland');
}

export default function NtoStarEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-servers-poland" />;
}

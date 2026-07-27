import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-servers-brazil');
}

export default function NtoStarEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-servers-brazil" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-brazil');
}

export default function NtoStarEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-brazil" />;
}

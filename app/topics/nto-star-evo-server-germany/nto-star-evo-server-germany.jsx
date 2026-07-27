import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-germany');
}

export default function NtoStarEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-germany" />;
}

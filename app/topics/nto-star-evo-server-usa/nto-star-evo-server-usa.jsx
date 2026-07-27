import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-usa');
}

export default function NtoStarEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-usa" />;
}

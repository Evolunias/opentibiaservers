import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-canada');
}

export default function NtoStarEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-canada" />;
}

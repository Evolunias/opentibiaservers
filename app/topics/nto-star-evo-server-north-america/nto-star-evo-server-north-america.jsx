import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-north-america');
}

export default function NtoStarEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-north-america" />;
}

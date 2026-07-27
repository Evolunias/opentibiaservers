import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-france');
}

export default function NtoStarEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-france" />;
}

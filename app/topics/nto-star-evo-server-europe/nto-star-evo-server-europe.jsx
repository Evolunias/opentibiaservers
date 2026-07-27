import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-evo-server-europe');
}

export default function NtoStarEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nto-star-evo-server-europe" />;
}

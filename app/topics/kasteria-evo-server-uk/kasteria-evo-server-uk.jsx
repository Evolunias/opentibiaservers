import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-uk');
}

export default function KasteriaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-uk" />;
}

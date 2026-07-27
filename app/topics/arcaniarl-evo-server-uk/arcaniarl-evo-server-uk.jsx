import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-uk');
}

export default function ArcaniarlEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-uk" />;
}

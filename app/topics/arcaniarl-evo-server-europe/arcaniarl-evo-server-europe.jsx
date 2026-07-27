import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-europe');
}

export default function ArcaniarlEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-europe" />;
}

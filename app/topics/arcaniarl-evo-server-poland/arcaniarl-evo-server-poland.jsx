import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-poland');
}

export default function ArcaniarlEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-poland" />;
}

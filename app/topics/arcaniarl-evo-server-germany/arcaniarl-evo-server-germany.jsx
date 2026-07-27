import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-germany');
}

export default function ArcaniarlEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-germany" />;
}

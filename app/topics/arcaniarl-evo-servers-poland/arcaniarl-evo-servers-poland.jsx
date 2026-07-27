import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-servers-poland');
}

export default function ArcaniarlEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-servers-poland" />;
}

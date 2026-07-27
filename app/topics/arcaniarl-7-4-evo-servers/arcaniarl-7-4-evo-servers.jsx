import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-evo-servers');
}

export default function Arcaniarl74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-evo-servers" />;
}

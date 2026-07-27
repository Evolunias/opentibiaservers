import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-evo-servers');
}

export default function Arcaniarl84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-evo-servers" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-evo-servers');
}

export default function Arcaniarl13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-evo-servers" />;
}

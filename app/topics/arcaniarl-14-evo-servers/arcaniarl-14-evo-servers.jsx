import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-evo-servers');
}

export default function Arcaniarl14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-evo-servers" />;
}

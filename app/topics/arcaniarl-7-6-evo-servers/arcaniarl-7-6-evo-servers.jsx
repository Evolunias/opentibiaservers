import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-evo-servers');
}

export default function Arcaniarl76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-evo-servers" />;
}

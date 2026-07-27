import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-evo-servers');
}

export default function Arcaniarl100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-evo-servers" />;
}

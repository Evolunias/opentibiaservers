import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-98-evo-servers');
}

export default function Arcaniarl1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-98-evo-servers" />;
}

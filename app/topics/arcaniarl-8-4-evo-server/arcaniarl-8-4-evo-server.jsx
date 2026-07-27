import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-evo-server');
}

export default function Arcaniarl84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-evo-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-0-evo-server');
}

export default function Arcaniarl80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-0-evo-server" />;
}

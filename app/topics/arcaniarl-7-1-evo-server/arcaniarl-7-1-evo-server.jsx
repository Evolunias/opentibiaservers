import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-1-evo-server');
}

export default function Arcaniarl71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-1-evo-server" />;
}

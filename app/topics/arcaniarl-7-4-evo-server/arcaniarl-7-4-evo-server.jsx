import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-evo-server');
}

export default function Arcaniarl74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-evo-server" />;
}

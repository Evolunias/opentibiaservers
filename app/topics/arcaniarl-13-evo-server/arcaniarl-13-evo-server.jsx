import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-evo-server');
}

export default function Arcaniarl13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-evo-server" />;
}

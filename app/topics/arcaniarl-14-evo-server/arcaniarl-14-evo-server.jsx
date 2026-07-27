import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-evo-server');
}

export default function Arcaniarl14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-evo-server" />;
}

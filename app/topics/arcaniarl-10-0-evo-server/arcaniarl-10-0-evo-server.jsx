import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-10-0-evo-server');
}

export default function Arcaniarl100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-10-0-evo-server" />;
}

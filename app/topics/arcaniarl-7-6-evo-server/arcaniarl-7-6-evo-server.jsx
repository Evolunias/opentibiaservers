import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-evo-server');
}

export default function Arcaniarl76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-evo-server" />;
}

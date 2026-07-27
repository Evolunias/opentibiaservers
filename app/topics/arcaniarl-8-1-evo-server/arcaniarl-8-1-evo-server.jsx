import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-evo-server');
}

export default function Arcaniarl81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-evo-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-54-evo-server');
}

export default function Arcaniarl854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-54-evo-server" />;
}

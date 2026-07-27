import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-evo-server');
}

export default function Arcaniarl96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-evo-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-evo-server');
}

export default function Arcaniarl12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-evo-server" />;
}

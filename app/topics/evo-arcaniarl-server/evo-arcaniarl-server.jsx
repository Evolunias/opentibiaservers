import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-arcaniarl-server');
}

export default function EvoArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="evo-arcaniarl-server" />;
}

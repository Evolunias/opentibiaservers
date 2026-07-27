import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-arcaniarl-servers');
}

export default function EvoArcaniarlServersKeywordPage() {
  return <StaticKeywordPage slug="evo-arcaniarl-servers" />;
}

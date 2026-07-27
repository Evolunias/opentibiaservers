import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-arcaniarl-server');
}

export default function PvpArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-arcaniarl-server" />;
}
